export default (currentPage = 0, isLast = false) => {
  return {
    currentPage,
    totalPages: 10,
    totalElements: 100,
    isLast
  }
}
