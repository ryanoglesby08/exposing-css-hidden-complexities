export default (matches = true) => {
  const matchMedia = jest.fn();
  matchMedia.mockImplementation(() => ({
    matches,
    addListener: () => {},
    removeListener: () => {}
  }));

  global.matchMedia = matchMedia;
};
