# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text
#  ord         :integer          not null
#  list_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Card < ActiveRecord::Base
  validates :title, :ord, :list_id, presence: true

  belongs_to :list
end
