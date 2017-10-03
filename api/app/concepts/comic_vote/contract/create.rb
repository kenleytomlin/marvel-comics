require 'reform/form/validation/unique_validator'

class ComicVote::Contract::Create < Reform::Form
  include Reform::Form::ActiveRecord

  property :comic_id
  validates :comic_id, unique: true
  validates :comic_id, presence: true
end
