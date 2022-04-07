# Use double brackets since `plugins` is an array of tables.
[[context.production.plugins]]
package = "@netlify/plugin-sitemap"
# Use Cypress plugin for this site.
# This section, by itself, configures the plugin
# for all deploy contexts (production, branch deploys, Deploy Previews).
[[plugins]]
package = "netlify-plugin-cypress"
  [plugins.inputs]
  record = true

# Don’t record Cypress tests in Deploy Previews.
# Since this entry is more specific, it overrides the entry above.
# `context.deploy-preview.plugins` and `package` must be included.
[[context.deploy-preview.plugins]]
package = "netlify-plugin-cypress"
  # Use single brackets since `inputs` is an object property
  [context.deploy-preview.plugins.inputs]
  record = false
# Configuration for a plugin published to npm
[[plugins]]
package = "netlify-plugin-lighthouse"

  [plugins.inputs]
  output_path = "reports/lighthouse.html"

# Configuration for a local plugin
[[plugins]]
package = "/plugins/netlify-plugin-hello-world"
# Replace `BUILD_PLUGIN_NAME` with a real plugin name, 
# like `netlify-plugin-lighthouse`
npm install -D BUILD_PLUGIN_NAME
