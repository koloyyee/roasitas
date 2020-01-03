
Django models

News
	- Slug 
	- Headline
	- Sub
	- News content
	- Published date 
	- Writer (fk)

Writer
	- Admin (fk)

Email Subscription 
	- Name of subscriber
	- Email of subscriber

Team Member
	- ID (Pk) 
	- Work ID
	- First name
	- Last name 
	- Joined Date
	- Position 
	- Status

Recipe
	- Id (Pk)
	- Name 
	- Category id (fk)
	- Ingredient id (fk)
	- Steps
	- Confirmed (Boolean )
	- Created date

Ingredient 
	- Id (Pk)
	- Name 
	- Ingredient family id (fk)

MEP
	- Id 
	- Jobs id (fk)
	- Created date

Jobs
	- Id(Pk
	- Description 
	- Station 
	- Team member id(fk)
	- Work Status id(fk)
	- Created date

Work status
	- Id
	- Status


	
	

