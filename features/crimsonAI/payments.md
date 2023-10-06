
# Payments (Postpaid to prepaid conversion) Technical Documentation

## Timelines (High level)

1. Flowchats [like One Auth] / Diagrams:                                         1 [Done]
3. Find Frontend Api calls to backend (payments)                                 0.5
4. Analysis of what endpoints can be reused v/s what needs changes               1
5. Backend Service Implemenation:
    1. Express/Nest/etc Framework Analysis                                      0.5 [Done]
    1. New DB setup                                                             0.5
    2. Project Bootstrap                                                        0.5 
    3. Calculations/ Manual DB insertions                                       2
    4. Modal Layer                                                              0.5
    5. Repository Layer                                                         1
    6. Contollers                                                               4-5 [~12 API's]
        6.1. success webhook
        6.2. failure webhook
        *** 1.
    7. Guards
5. Remove existing crons/code                                                   1
6. Unit tests                                                                   2
7. Aws/ Docker Containerization                                                 1.5 [+ Jitendras help]
8. QA/Prod Env Set up                                                           0.5
9. Release Doc                                                                  1
10. Notification Engine/service                                                 3
11. Frontend                                                                    5 [Better Estimates by FEteam]

## Challenges Anticipated
    1. If the user cancels subscription vis stripe checkout, the user should be switched to basic plan
    2. certain keys of response may change or get deleted. Vuex read these keys. There might be a lot of frontend breaks.
    3. If existing tables are used (existing DB):
        

    4. If new tables are used (either same DB, or new DB [closer to Microservice architecture]):
        Bad Parts:
            1. If all Modals/Raw tables references are not changed, 
                1. stale data might get read and rendered.
                2. table joins may not work. (table reference errors) [there are only some columns which are used for joins]
            2. If we manage to change all Modals/Raw table references,
                1. certain columns which do no exist, if queried, might throw a reference error []
                2. to solve 1., we will have to correctly change all column referencesA
        Good Parts:
            1. Scope for better way to orangize data
            2. If 1. & 2. of bad parts are carefully handled at every corner of the app, creating a new DB is a good idea.

## Approach
1. *** Create a Microservice ***
2. *** Create new files in the existing code base ***

## Technical challenges
    1. What contollers are needed by stripe checkout v/s ensure what will not be missing from old controllers.
    2. Recurring payments.
    3. In Enago Read we do not store payment details.
    4. There is only one type of payment i.e card payment as the default payment type.
    5. Can the new Microservice architecture follow a similar pattern of TRINKA payment system; predicting similar feature extensions to this microservice

## List of existing controllers
    1. assign-user-chosen-plan.js *
    2. cancel-subscription.js [[remove the cancel subscription route, code and frontend CTA]
    3. usage-report-script.js [[remove the cron; remove the usage reporting route, code]
    4. daily-subscription-script.js [[can be reomoved - it cancels/swicthes plans which are going to be abstracted by stripe]
    5. fetch-user-current-subscription-detail.js
    6. toggle-auto-renewal.js
    7. webhook-handler.js
    8. fetch-user-plan-details.js

## List of existing helpers
    1. assign-basic-plan.js
    2. assign-user-chosen-plan.js *
    3. calculate-this-months-invoice.js
    3. calculate-subscripton-cost.js
    4. get-current-usage.js
    5. get-stripe-subscription-id.js

## List of exsisting tables
    1. subscription
    2. user_opted_subscription
    3. pending_subscription_changes
    4. invoice
    5. plan_usage_limits
    6. tldr/ki-requested-remaining
    7. copilot_credit_remaining
    8. user_subscription
        
## Current Observations
    1. assign-user-chosen-plan.js
    2. calculate this months invoice
        - calculates the prorated amount f(user-opted-subscriptions)
    3 usage-report-script.js
    4. In Enago Read we do not store payment details.
    5. There is only one type of payment i.e card payment as the default payment type.

## Mistakes & Issues

# Discussion
    - No Basic plan when user signs up. [Leave it as it is].
    - Creation of prepaid plans
        - R&D 
        - Calculation
        - Create plans on stripe Dashboard/Stripe Apis
        - Need card details [Discuss with AV]
        - Understand stripe well [Webhooks, prepaid plans, recurring payments, proration calculation]
    
    - Create Express Server
        Dylan:
        !! I thought of deleting these contents. However, this became helpful later on.
            - configure stripe checkout api
                - line_items: 
                    2 line items?
                    subscription mode with recurring prices will be used (stripe checkout handles generation of invoices)
                    - child 
                        - price: id of the plan object 
                        - price_data: data that will be used to generate a new Price object inline
                            {
                                currency: USD
                                product: {Id of our Premium product}, PremiumCP in another line item
                                product_data:
                                    name: Premium {Products name to be displayed to the customer}
                                    description: 
                                    images:
                                    metadata: no need to attach a metadata object
                                    taxcode: not needed
                                    unit amount/ unit_amount_decimal: how much to charge 
                                    recurring:
                                        - interaval [billing frqeuncy - day, week, month, year] {we will use only month and year}
                                        - interval_count: just an alternative to interval with a different format
                                    tax_behavior: no taxes. taxes are part og the prices we offer on enago read
                                    quantity: should be 1
                                    adjustable_quantity: 
                                        enabled: 
                                        maximum: not needed
                                        minimum: not needed
                                    dynamic_tax_rates: not needed
                                    tax_rates: not needed
                            }        
                - mode: setup [to save credit card details]
                        subscription [to set up fixed price if atleast one item has recurring payments] 
                - success url: (our success page)
                - cancel url: (page to be redirected to if our subsciption is cancelled i.e the user presses the back button on the stripe checkout page)
                - failure url??: (our failure page)
                - currency: [USD]
                - customer: If frontend can send this we can use the cusotmerId to prefill
                    - email
                    - name
                    - credit_card details
                    - billing address
                     {Since we are using subscription mode, the customer's default payment method will be used if it;s a card, otherwise the most recent card will be used }

                - customer_email:
                - metadata: 
            - invoice creation {might/should be used}
            - discounts
            - coupons
            - locale
            
            - create a controller to assign a user chosen plan
                - Flow:
                    - Authenticate the 
                    - create checkout session

# Retrospective
- Too much time was spent on analysis
- why store stripe data in our DB when we can quickly retieve all the info from stripe? - this should have been decided 
- learn the technologies of a company well - be it nginx or js
            

        


