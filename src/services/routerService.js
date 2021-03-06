export const routerService = {
  home: () => `/home`,
  catalog: (params = {}) => {
    const string = new URLSearchParams(params).toString();
    return `/catalog${string ? `?${string.toString()}` : ''}`
  },
  product: (productId = ':productId') => `/product/${productId}`,
  companies: (params) => {
    const string = new URLSearchParams(params).toString();
    return `/companies${string ? `?${string.toString()}` : ''}`
  },
}
