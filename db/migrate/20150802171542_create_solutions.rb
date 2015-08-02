class CreateSolutions < ActiveRecord::Migration
  def change
    create_table :solutions do |t|
      t.boolean :open
      t.integer :question_id
      t.integer :answer_id

      t.timestamps null: false
    end
  end
end
