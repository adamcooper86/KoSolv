class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.integer :solution_id
      t.text    :content
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
