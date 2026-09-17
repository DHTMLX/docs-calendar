---
sidebar_label: serialize()
title: serialize Method
description: You can learn about the serialize method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# serialize()

### Description

@short: Serializes Event Calendar data to JSON

### Usage

~~~jsx {}
serialize(): object;
~~~

### Returns

The method returns an object of Event Calendar data  (events and calendars)

~~~jsx {}
{
    events: [{...}, {...}, ...],
    calendars: [{...}, {...}, ...]
}
~~~

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", { 
    // configuration parameters
});
// get an object of the Event Calendar data (events and calendars)
const serialized_data = calendar.serialize();
console.log(serialized_data);
~~~
