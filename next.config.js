module.exports = {
  env: {
    customKey: "https://oishicanete.herokuapp.com/api/v1",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
