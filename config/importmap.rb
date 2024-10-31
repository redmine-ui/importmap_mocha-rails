pin "importmap_mocha"

pin "@mswjs/interceptors", to: "@mswjs--interceptors.js"
pin "@mswjs/interceptors/presets/browser" , to: "@mswjs--interceptors--presets--browser.js"
pin "chai", to: "chai.js"

Rails.application.config.importmap_mocha_path.each do |path|
  pin_all_from path
end
