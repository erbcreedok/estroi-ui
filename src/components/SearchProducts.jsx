import {Autocomplete} from "@mui/material";
import {CircularProgress, TextField} from "@mui/material";
import {useCallback, useEffect, useMemo, useState} from "react";
import {ProductsStore} from "../store/ProductsStore";
import {useDebounce} from "../hooks/useDebounce";
import {observer} from "mobx-react";
import {useNavigate} from "react-router-dom";
import {routerService} from "../services/routerService";

export const SearchProducts = observer(() => {
  const [inputValue, setInputValue] = useState('')
  const productsStore = useMemo(() => new ProductsStore(null), [])
  const { loading, products } = productsStore
  const debouncedInputValue = useDebounce(inputValue)
  const navigate = useNavigate()

  useEffect(() => {
    if (debouncedInputValue) {
      productsStore.searchProducts(debouncedInputValue)
    }
  }, [debouncedInputValue, productsStore])

  const handleChange = useCallback((e, value) => {
    navigate(routerService.product(value.id))
  }, [navigate])

  return (
    <Autocomplete
      fullWidth
      clearOnBlur
      clearOnEscape
      options={products}
      getOptionLabel={(obj) => obj.name}
      noOptionsText={inputValue.length > 0 ? 'Не найдено' : 'Введите текст'}
      size="small"
      onInputChange={(e, value) => setInputValue(value)}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Поиск товаров"
          InputProps={{
            ...params.InputProps,
            sx: { background: 'white' },
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  )
})
