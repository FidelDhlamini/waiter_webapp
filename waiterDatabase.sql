create table greetings (
    id serial primary key, 
    added_names text not null,
    days_available text[] not null
    );