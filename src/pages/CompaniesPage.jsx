import {Box, Container, Pagination, Typography} from "@mui/material";
import {useStore} from "../store";
import {Breadcrumbs} from "../components/Breadcrumbs";
import {routerService} from "../services/routerService";
import {Flex} from "../components/Flex";
import {observer} from "mobx-react";
import {COLORS} from "../constants/colors";
import {BaseLink} from "../components/BaseLink";

export const CompaniesPage = observer(() => {
  const { companyStore } = useStore()
  const { companies, selected, selectCompany, setPage, pageInfo } = companyStore

  return (
    <Container sx={{ my: 2 }} maxWidth="xl">
      <Breadcrumbs links={[{ label: 'Главная', to: routerService.home() }, { label: 'Компании', to: routerService.companies() }]} my="20px" />
      <Typography fontSize="24px" color={COLORS.gray.darker}>Компании</Typography>
      <Flex gap="20px">
        <Box width="300px" ml={-1} pr={1} borderRight={`1px solid ${COLORS.gray.light}`}>
          {companies.map((company) => (
            <Box
              key={company.id}
              onClick={() => selectCompany(company)}
              sx={{
                cursor: 'pointer',
                background: company === selected ? COLORS.green.default : undefined,
                color: company === selected ? 'white' : undefined,
                borderRadius: '4px',
                py: 1,
                pl: 1,
              }}
            >
              {company.name}
            </Box>
          ))}
          <Box mt={1}>
            <Pagination count={pageInfo.totalPages} page={pageInfo.currentPage + 1} size="small" onChange={(e, page) => setPage(page - 1)} />
          </Box>
        </Box>
        <Box flexGrow={1}>
          {selected && (
            <>
              <Typography component="h1" fontSize="32px" color={COLORS.gray.darkest}>{selected.name}</Typography>
              <Typography my={1} fontSize="14px" color={COLORS.gray.darker}>{selected.address}</Typography>
              <Typography my={1} fontSize="14px" color={COLORS.gray.darker}>Дата регистрации: {selected.regDT}</Typography>
              <Flex gap={2}>
                <Box my={2} sx={{ width: { xs: '100%', sm: '30%' }}}>
                  <Typography fontSize="24px">Контакты</Typography>
                  {selected.phone1 && <Typography fontSize="14px">Телефон: {selected.phone1}</Typography>}
                  {selected.phone2 && <Typography fontSize="14px">Телефон: {selected.phone2}</Typography>}
                  {selected.phone3 && <Typography fontSize="14px">Телефон: {selected.phone3}</Typography>}
                  {selected.phone4 && <Typography fontSize="14px">Телефон: {selected.phone4}</Typography>}
                  {selected.email1 && <Typography fontSize="14px">Эл. почта: {selected.email1}</Typography>}
                  {selected.email2 && <Typography fontSize="14px">Эл. почта: {selected.email2}</Typography>}
                  {selected.website && <Typography fontSize="14px">Вебсайт: {selected.website}</Typography>}
                </Box>
                <Box my={2} sx={{ width: { xs: '100%', sm: '70%' }}}>
                  <Typography fontSize="24px">Типы товаров</Typography>
                  {selected.typeOfProducts.map((category) => (
                    <BaseLink key={category.id} to={routerService.catalog({ categoryId: category.id })} hoverColor>
                      <Box py={1} sx={{ borderBottom: `1px dashed ${COLORS.gray.lighter}`}}>
                        {category.name}
                      </Box>
                    </BaseLink>
                  ))}
                </Box>
              </Flex>
            </>
          )}
          {!selected && (
            <Typography fontSize="32px" color={COLORS.gray.darker}>Выберите компанию</Typography>
          )}
        </Box>
      </Flex>
    </Container>
  )
})
