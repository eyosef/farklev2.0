class Comments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :username
      t.string :email
      t.string :comment
      t.integer :likes

      t.timestamps
    end
  end
end
