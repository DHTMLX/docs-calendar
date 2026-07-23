---
sidebar_label: setDate()
title: setDate Method
description: You can learn about the setDate method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# setDate()

### Description

@short: Sets a current date of Event Calendar

### Usage

~~~jsx {}
setDate({ value: Date }): void;
~~~

### Parameters

- `value` - (required) the current date of Event Calendar

### Example

~~~jsx {6-7}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    // configuration parameters
});
//set current date
const date = new Date("2021-05-24 00:00:00");
calendar.setDate({ value: date });
~~~
