import {Box, Button, Modal, Typography} from "@mui/material";
import styled from "@emotion/styled";
import {COLORS} from "../constants/colors";
import {Flex} from "./Flex";

const Body = styled(Box)`
  max-width: 100%;
  max-height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: auto;
  width: 600px;
  background: white;
  border-radius: 10px;
  padding: 20px 10px;
`
export const StoreModal = ({ storeItem, ...rest }) => {
  return (
    <Modal {...rest}>
      {storeItem && (
        <Body>
          <Typography fontSize={24} mb={2}>{storeItem.store.name}</Typography>
          <Box my={2}>
            <Typography fontWeight="bold" color={COLORS.gray.dark}>О компании</Typography>
            <Typography fontSize={14}>{storeItem.store.about}</Typography>
          </Box>
          <Box my={2}>
            <Typography fontWeight="bold" color={COLORS.gray.dark}>Адрес</Typography>
            <Typography fontSize={14}>{storeItem.store.address}</Typography>
          </Box>
          <Box my={2}>
            <Typography fontWeight="bold" color={COLORS.gray.dark}>Конакты</Typography>
            <Typography fontSize={14} my={1}>{storeItem.store.phone}</Typography>
            <Typography fontSize={14} my={1}>{storeItem.store.email}</Typography>
          </Box>
          <Flex justifyContent="flex-end">
            <Button onClick={rest.onClose}>Закрыть</Button>
          </Flex>
        </Body>
      )}
    </Modal>
  )
}
