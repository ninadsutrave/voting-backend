# Voting Ballot REST API

## Description

A REST API for a voting platform with anonymous voting. This platform was primarily developed for the Governing Body Elections of Pehchaan - Ek Safar, an NGO run by IIT Ropar students aiming to educate the underprivileged. It was executed successfully with great performance for ~100 voters.

## API EndPoints

BASE URL: https://voting-ballot.herokuapp.com/admin/

- /viewVoters

  | Purpose          | To view the list of voters and their information |
  | ---------------- | -------------------------------------------------------------- |
  | METHOD           | GET                                                            |
  | Query Parameters | searchItem                                                     |
  | Path Parameters  | None                                                           |
  | Request Body     | None                                                           |
  | URL              | https://voting-ballot.herokuapp.com/admin/viewVoters?searchItem=Ra         |
  
- /createPassword

  | Purpose          | To generate a randomised secret token and mail to the voter |
  | ---------------- | -------------------------------------------------------------- |
  | METHOD           | POST                                                           |
  | Query Parameters | None                                                     |
  | Path Parameters  | None                                                           |
  | Request Body     | { name, pehchaanId, toEmail }                                  |
  | URL              | https://voting-ballot.herokuapp.com/admin/createPassword                    |


- /updateVote

  | Purpose          | To receive the cast vote and update the standings accordingly |
  | ---------------- | ----------------------------------------------------- |
  | METHOD           | PATCH                                                |
  | Query Parameters | None                                                  |
  | Path Parameters  | None                                                  |
  | Request Body     | { secretToken, president, vice, secretary }                                     |
  | URL              | https://voting-ballot.herokuapp.com/admin/updateVote                      |

- /viewResults

  | Purpose          | To view the final standings of the election |
  | ---------------- | ------------------------------------- |
  | METHOD           | GET                                   |
  | Query Parameters | None                                  |
  | Body Parameters  | None                                  |
  | Request Body     | None                                  |
  | URL              | https://voting-ballot.herokuapp.com/admin/viewResults          |

## Front End

Git repository: https://github.com/NinadSutrave/voting-ballot

Live website: https://pehchaan.netlify.app

The application may be used for future elections of Pehchaan, and thus the admin access is restricted.

## License

Apache-2.0 © Ninad Sutrave
