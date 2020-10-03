const useDebounce = (callbackFunction, delay) => {

  const debouncedFunction = (...args) => {
    setTimeout(() => callbackFunction(...args), delay);
  };

  return debouncedFunction;
};

export default useDebounce;