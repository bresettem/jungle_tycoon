class Image < ApplicationRecord
  include PgSearch::Model
  pg_search_scope :global_search, against: :identifier, using: {
    tsearch: {
      any_word: true
    }
  }
end