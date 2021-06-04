# Routes

## Root

| Request | Path                        | Action   | Description                         |
| ------- | --------------------------- | -------- | ----------------------------------- |
| GET     | /                           | #index   |  display homepage                   |

## Admins

| Request | Path                        | Action   | Description                         |
| ------- | --------------------------- | -------- | ----------------------------------- |
| GET     | /admins/:id                 | #show    | display builder dashboard           |

## Projects

| Request | Path                        | Action   | Description                         |
| ------- | --------------------------- | -------- | ----------------------------------- |
| GET     | /projects/                  | #index   | display project dashboard           |
| GET     | /projects/:id               | #show    | display project dashboard           |

## Change orders

| Request | Path                        | Action   | Description                         |
| ------- | --------------------------- | -------- | ----------------------------------- |
| GET     | /change_orders              | #index   | display list of change orders       |
| GET     | /change_orders/new          | #new     | form to add new change order        |
| POST    | /change_orders              | #create  | add new change order                |
| GET     | /change_orders/:id/edit     | #edit    | form to edit change order           |
| POST    | /change_orders/:id          | #update  | edit change order                   |
| DELETE  | /change_orders/:id          | #destroy | delete change order                 |

## Documents

| Request | Path                        | Action   | Description                         |
| ------- | --------------------------- | -------- | ----------------------------------- |
| GET     | /documents                  | #index   | display list of documents           |
| GET     | /documents/new              | #new     | form to add new document            |
| POST    | /documents                  | #create  | add new document                    |
| GET     | /documents/:id/edit         | #edit    | form to edit document               |
| POST    | /documents/:id              | #update  | edit document                       |
| DELETE  | /documents/:id              | #destroy | delete document                     |

## Milestones

| Request | Path                        | Action   | Description                         |
| ------- | --------------------------- | -------- | ----------------------------------- |
| GET     | /milestones                 | #index   | display list of milestones          |
<!-- | GET     | /milestones/:id             | #show    | view individual milestone           | -->
| GET     | /milestones/new             | #new     | form to add new milestone           |
| POST    | /milestones                 | #create  | add new milestone                   |
| GET     | /milestones/:id/edit        | #edit    | form to edit milestone              |
| POST    | /milestones/:id             | #update  | edit milestones                     |
| DELETE  | /milestones/:id             | #destroy | delete milestone                    |

## Budget Categories

| Request | Path                        | Action   | Description                         |
| ------- | --------------------------- | -------- | ----------------------------------- |
| GET     | /budget_categories          | #index   | display budget                      |
| GET     | /budget_categories/:id      | #show    | view transactions within a category |
| GET     | /budget_categories/new      | #new     | form to add new budget category     |
| POST    | /budget_categories          | #create  | add new budget category             |
| GET     | /budget_categories/:id/edit | #edit    | form to edit budget category        |
| POST    | /budget_categories/:id      | #update  | edit budget category                |
| DELETE  | /budget_categories/:id      | #destroy | delete budget category              |

## Transactions

| Request | Path                        | Action   | Description                         |
| ------- | --------------------------- | -------- | ----------------------------------- |
| GET     | /transactions               | #index   | display list of transactions        |
| GET     | /transactions/:id           | #show    | view individual transaction         |
| GET     | /transactions/new           | #new     | form to add new transaction         |
| POST    | /transactions               | #create  | add new transaction                 |
| GET     | /transactions/:id/edit      | #edit    | form to edit transaction            |
| POST    | /transactions/:id           | #update  | edit transaction                    |
| DELETE  | /transactions/:id           | #destroy | delete transaction                  |