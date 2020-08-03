module Redmine_field_word
  module Hooks
    class Hooks < Redmine::Hook::ViewListener
      render_on :view_issues_show_description_bottom, :partial => 'hooks/field_word/view_issues_show_description_bottom'
      render_on :view_issues_new_top, :partial => 'hooks/field_word/view_issues_new_top'
    end
  end
end
