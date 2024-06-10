# Run local server
rails s

# Generate databases defined in database.yml
rails db:create

# Create database model (Storaged in db/migrate)
rails generate model ModelName field_name:type field_name:type

# Run migration
rails db:migrate
