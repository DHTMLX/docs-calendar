---
sidebar_label: deleteEvent()
title: deleteEvent Method
description: You can learn about the deleteEvent method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# deleteEvent()

### Description

@short: Removes an event by its ID

### Usage

~~~jsx {}
deleteEvent({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) an **ID** of the event to be deleted 

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// delete an event with the "1" ID
calendar.deleteEvent({ id: "1" });
~~~
