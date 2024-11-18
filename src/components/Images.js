const importAll = (requireContext) => {
    const images = {};
    requireContext.keys().forEach((item) => {
      const key = item.replace('./', '');
      images[key] = requireContext(item);
    });
    return images;
  };
 
  const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg|webp|avif)$/));

  export default images;