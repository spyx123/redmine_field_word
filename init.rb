require 'redmine'
require_dependency 'redmine_field_word/my_hook'

Redmine::Plugin.register :redmine_field_word do
  name 'Redmine issue add field word'
  author 'Sergey Lapetov'
  description 'Add field word'
  version '0.0.1'
  url 'http://srv-dnp.argos.loc/gitlab/argosprogrammer/redmine_field_word'
end
