class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :prompt
      t.string :category

      t.timestamps null: false
    end
  end
end
