module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: false,
      apolloServer: {
        tracing: true,
      },
    },
  },
});
