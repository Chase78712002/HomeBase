#config/initializers/session_store.rb
if Rails.env === 'development' 
  Rails.application.config.session_store :cookie_store, key: '_HomeBase', domain: '_HomeBase-json-api'
else
  Rails.application.config.session_store :cookie_store, key: '_HomeBase'
end