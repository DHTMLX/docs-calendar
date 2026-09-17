---
sidebar_label: destructor()
title: destructor Method
description: You can learn about the destructor method in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# destructor()

### Description

@short: Removes all HTML elements of Event Calendar, and detaches all related events

### Usage

~~~jsx {}
destructor(): void;
~~~

### Example

~~~jsx {6}
// create Event Calendar
const calendar = new eventCalendar.EventCalendar("#root", {
    //configuration parameters
});
// delete Event Calendar
calendar.destructor();
~~~
