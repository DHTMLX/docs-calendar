---
sidebar_label: deleteCalendar()
title: deleteCalendar Method
description: You can learn about the deleteCalendar method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# deleteCalendar()

### Description

@short: Removes a calendar by its ID

### Usage

~~~jsx {}
deleteCalendar({ id: string | number }): void;
~~~

### Parameters

- `id` - (required) an ID of the current calendar

### Example

~~~jsx {6-8}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
// delete calendar with the "work" ID
calendar.deleteCalendar({
    id: "work"
});
~~~
