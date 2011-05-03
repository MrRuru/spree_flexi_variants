class AddAllowMultipleChoiceToAdHocOptionTypes < ActiveRecord::Migration
  def self.up
    add_column :ad_hoc_option_types, :allow_multiple_choice, :boolean, :default => false
  end

  def self.down
    remove_column :ad_hoc_option_types, :allow_multiple_choice
  end
end
