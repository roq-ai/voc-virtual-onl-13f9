import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createChatLog } from 'apiSdk/chat-logs';
import { chatLogValidationSchema } from 'validationSchema/chat-logs';
import { ChatInterface } from 'interfaces/chat';
import { getChats } from 'apiSdk/chats';
import { ChatLogInterface } from 'interfaces/chat-log';

function ChatLogCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: ChatLogInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createChatLog(values);
      resetForm();
      router.push('/chat-logs');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ChatLogInterface>({
    initialValues: {
      log_message: '',
      chat_id: (router.query.chat_id as string) ?? null,
    },
    validationSchema: chatLogValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Chat Logs',
              link: '/chat-logs',
            },
            {
              label: 'Create Chat Log',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Chat Log
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.log_message}
            label={'Log Message'}
            props={{
              name: 'log_message',
              placeholder: 'Log Message',
              value: formik.values?.log_message,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<ChatInterface>
            formik={formik}
            name={'chat_id'}
            label={'Select Chat'}
            placeholder={'Select Chat'}
            fetcher={getChats}
            labelField={'message'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/chat-logs')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'chat_log',
    operation: AccessOperationEnum.CREATE,
  }),
)(ChatLogCreatePage);
