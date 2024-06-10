class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password, null: false
      t.string :first_name
      t.string :last_name
      t.string :profile_picture
      t.text :bio
      t.datetime :last_login_at
      t.boolean :active, default: true

      t.timestamps
    end
  end
end
