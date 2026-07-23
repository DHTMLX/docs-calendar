---
sidebar_label: theme
title: theme Config
description: You can learn about the theme config in the documentation of the DHTMLX JavaScript Event Calendar library. Browse developer guides, API reference, code examples, and integration tutorials for customers with an existing DHTMLX Event Calendar license.
---

# theme

### Description

@short: Optional. An initial theme of Event Calendar

### Usage

~~~jsx {}
theme?: "material"|"willow"|"willowDark"; 
~~~

### Default config

By default, the **theme** config is set to the **"material"** value

~~~jsx {}
theme: "material" 
~~~

:::info
To set a theme dynamically, you can use the
[`setTheme()`](../../methods/js_eventcalendar_settheme_method) and
[`setConfig()`](../../methods/js_eventcalendar_setconfig_method) methods
:::

### Example

~~~jsx {3}
// create Event Calendar
new eventCalendar.EventCalendar("#root", {
    events,
    theme: "willowDark"
    // other configuration parameters
});
~~~

**Related sample:** [Event Calendar. Styling (Built-in themes)](https://snippet.dhtmlx.com/nh2g0j2o?tag=event_calendar)