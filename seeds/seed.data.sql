BEGIN;

INSERT INTO journal
(id, user_id, journal_title)
VALUES
(1, 1,'Japan FALL 2019');

INSERT INTO pages
(id,journal_id, page_type, page_num)
VALUES
(1,1, 'itinerary', 1),
(2,1, 'wishlist', 2),
(3,1, 'shoppinglist', 3),
(4,1, 'packinglist', 4),
(5,1, 'daily entry', 5),
(6,1, 'daily entry', 6);

INSERT INTO packing_list_title(
    id, packing_title
)
VALUES
(1, 'International');

INSERT INTO packing_list_items(
    packing_item, packing_item_checked, packing_list_id
)
VALUES
('Toothbrush', false, 1),
('Toothpaste', false, 1),
('Keys', false, 1);

INSERT INTO wishlist
(id, page_id)
VALUES
(1, 2);

INSERT INTO wishlist_items(
    wishlist_item, wishlist_item_checked, wishlist_id
)
VALUES
('Fountain pen', false, 1),
('Post Office Bear', false, 1);

INSERT INTO shopping_list(
    id, page_id
)
VALUES
(1, 3);

INSERT INTO shopping_list_items
(shopping_list_id, shopping_item, shopping_item_checked)
VALUES
(1, 'Brocolli', false),
(1, 'Cheese', false),
(1, 'Crackers', false);

INSERT INTO daily_entry 
(page_id, picture, location, text_entry)
VALUES
(5, 'chocolate', 'france', 'lorem ipsum bla bla blatttty'),
(6, 'Rooster and Rice', 'Thailand', 'lefefefefee blatttty');

INSERT INTO itinerary
(id, page_id)
VALUES
(1, 1);

INSERT INTO itinerary_daily
(itinerary_id, travel_day, daily_title, daily_destinations, date)
VALUES
(1, 1, 'Asakusa and temples', 'Asakusa, Japan', '01-02-2020'),
(1, 2, 'Eat takoyaki under a cherry blossom', 'Ikebukuro, Tokyo, Japan', '01-03-2020');

COMMIT;
