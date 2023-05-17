/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  env:{
    GOOGLE_CLIENT_ID:"299260064865-ch9sdt37h25qok8a5anfrtn111p19g9u.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET:"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",
  }
}

module.exports = nextConfig
