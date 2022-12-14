Feature: I as a user i need validate astrodata Api service

  Scenario: Get astrology data
    Given url "https://api.xmltime.com"
    And path "/astrodata"
    And path expires = "2022-12-11T04%3A02%3A19%2B00%3A00"
    And param accesskey = "dGR6SGRSfr"
    And param signature = "u4lAhgGMvDu4dadSiBmucN2BaWk 3D"
    And param version = "3"
    And param prettyprint = '1'
    And param object = "sun"
    And param placeid = "norway%2Foslo"
    And param interval = "2022-12-11T02%3A02%3A19"
    When method get
    Then status 200

  Scenario: Post new objet
    Given url "https://api.xmltime.com"
    And path "/astrodata"
    And request {"object": "moon"}
    When method post
    Then status 401

  Scenario: validate version
    Given url "https://api.xmltime.com"
    And path "/astrodata?expires=2022-12-11T04%3A02%3A19%2B00%3A00&signature=u4lAhgGMvDu4dadSiBmucN2BaWk%3D&accesskey=dGR6SGRSfr&version=3&prettyprint=1&object=sun&placeid=norway%2Foslo&interval=2022-12-11T02%3A02%3A19"
    When method get
    Then status 200
    And match $.version == 4
    And match $.version contains '#notnull'