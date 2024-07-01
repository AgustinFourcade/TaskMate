class CreateTasks < ActiveRecord::Migration[7.1]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :description
      t.datetime :due_date
      t.boolean :completed, default: false
      t.integer :priority, default: 3
      t.references :user, foreign_key: true # Esto asume que tienes una tabla de users
      t.string :status, default: "pending"
      t.array :tags

      t.timestamps
    end
  end
end
