---
sidebar_label: How-tos
title: JavaScript Event Calendar How-Tos
description: You can explore the How-tos page of DHTMLX JavaScript Event Calendar library in the documentation. Browse developer guides and API reference, try out code examples and live demos, and download a free 30-day evaluation version of DHTMLX Event Calendar.
---

# How-tos

This page provides a full-fledged reference about initializing, configuring, customizing and working with JavaScript Event Calendar.

## Basic principles

In this section you can find out basic principles of work with Event Calendar

| Topic                        | Description                            |
| ---------------------------- | ---------------------------------------|
| [](guides/initialization.md) | Learn how to initialize Event Calendar |
| [](guides/configuration.md)  | Learn how to configure Event Calendar  |
| [](guides/customization.md)  | Learn how to customize Event Calendar  |
| [](guides/stylization.md)    | Learn how to stylize Event Calendar    |
| [](guides/localization.md)   | Learn how to localize Event Calendar   |

## API reference

In this section you can find out corresponding references of Event Calendar API

| Topic                                                              | Description                                        |
| ------------------------------------------------------------------ | -------------------------------------------------- |
| [Event Calendar inner events](api/overview/events_overview.md)     | Learn how to work with Event Calendar inner events |
| [Event Calendar methods](api/overview/methods_overview.md)         | Learn how to work with Event Calendar methods      |
| [Event Calendar properties](api/overview/properties_overview.md)   | Learn how to work with Event Calendar properties   |
| [Event Bus methods](api/overview/internal_eventbus_overview.md)    | Learn how to work with Event Bus methods           |
| [RestDataProvider methods](api/overview/rest_methods_overview.md)  | Learn how to work with RestDataProvider methods    |
| [State methods](api/overview/internal_state_overview.md)           | Learn how to work with State methods               |

## How to work with events

In these sections you can find out how to perform operations with events, work with events data and corfigure events

### Performing operations with events

| Topic                                                                | Description                                             |
| -------------------------------------------------------------------- | ------------------------------------------------------- |
| [Adding new events](api/methods/js_eventcalendar_addevent_method.md) | Learn how to add new events (without opening an editor) |
| [Creating new events](api/methods/js_eventcalendar_createevent_method.md)| Learn how to create new events and open an editor   |
| [Deleting events](api/methods/js_eventcalendar_deleteevent_method.md)| Learn how to delete events                              |
| [Updating events](api/methods/js_eventcalendar_updateevent_method.md)| Learn how to update events                              |

### Working with event data

| Topic                                                                      | Description                               |
| -------------------------------------------------------------------------- | ----------------------------------------- |
| [Getting event data](api/methods/js_eventcalendar_getevent_method.md)      | Learn how to get the event data by its ID |
| [Loading initial data](api/config/js_eventcalendar_events_config.md)       | Learn how to load the initial event data  |
| [Parsing event data](api/methods/js_eventcalendar_parse_method.md)         | Learn how to parse the event data         |
| [Serializing event data](api/methods/js_eventcalendar_serialize_method.md) | Learn how to serialize the event data     |

### Configuring events

| Topic                                                                   | Description                                                                          |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| [Creating events](api/config/js_eventcalendar_config_config.md)         | Learn how to enable/disable creating events (see the *readonly* parameter)           |
| [Creating events via dnd](api/config/js_eventcalendar_config_config.md) | Learn how to enable/disable creating events via dnd (see the *dragCreate* parameter) |
| [Creating events via double clicking](api/config/js_eventcalendar_config_config.md)| Learn how to enable/disable creating events via double clicking (see the *createEventOnDblClick* parameter)|
| [Resizing events via dnd](api/config/js_eventcalendar_config_config.md) | Learn how to enable/disable resizing events via dnd (see the *dragResize* parameter) |
| [Dragging (moving) events](api/config/js_eventcalendar_config_config.md)| Learn how to enable/disable dragging (moving) events (see the *dragMove* parameter)  |
| [Editing events](api/config/js_eventcalendar_config_config.md)          | Learn how to enable/disable editing events (see the *readonly* parameter)            |
| [Setting an events height](api/config/js_eventcalendar_config_config.md)    | Learn how to set a fix height of events (see the *eventHeight* parameter)        |
| [Setting an events time step](api/config/js_eventcalendar_config_config.md) | Learn how to set a time step when moving events (see the *timeStep* parameter)   |
| [Setting an events default duration](api/config/js_eventcalendar_config_config.md) | Learn how to set a time step when moving events (see the *defaultEventDuration* parameter)|
| [Setting an events positioning](api/config/js_eventcalendar_config_config.md)| Learn how to set positioning of events (see the *eventOverlay* parameter)       |
| [Customizing an events appearance](api/config/js_eventcalendar_templates_config.md)| Learn how to customize an event appearance using templates                |

## How to work with calendars (event types)

In these sections you can find out how to perform operations with calendars (event types), work with calendars data and corfigure calendars

### Performing operations with calendars (event types)

| Topic                                                                      | Description                    |
| -------------------------------------------------------------------------- | ------------------------------ |
| [Adding new calendars](api/methods/js_eventcalendar_addcalendar_method.md) | Learn how to add new calendars |
| [Deleting calendars](api/methods/js_eventcalendar_deletecalendar_method.md)| Learn how to delete calendars  |
| [Updating calendars](api/methods/js_eventcalendar_updatecalendar_method.md)| Learn how to update calendars  |

### Working with calendars (event types) data

| Topic                                                                   | Description                                      |
| ----------------------------------------------------------------------- | ------------------------------------------------ |
| [Loading initial data](api/config/js_eventcalendar_calendars_config.md) | Learn how to load the initial data for calendars |

### Configuring calendars (event types)

| Topic                                                                   | Description                                                                  |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| [Editing calendars](api/config/js_eventcalendar_calendars_config.md)    | Learn how to enable/disable editing calendars (see the *readonly* parameter) |
| [Setting a calendar state](api/config/js_eventcalendar_calendars_config.md) | Learn how to set a calendar state (see the *active* parameter)           |
| [Setting a calendar color](api/config/js_eventcalendar_calendars_config.md) | Learn how to set a calendar color (see the *color* parameter)            |

## How to work with events editor

In this section you can find out how to work with an events editor

| Topic                                                                  | Description                                                                        |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [Autosaving mode](api/config/js_eventcalendar_config_config.md)        | Learn how to enable/disable an editor autosave mode (see the *autoSave* parameter) |
| [Configuring an editor appearance](api/config/js_eventcalendar_editorshape_config.md) | Learn how to configure an editor appearance                         |
| [Updating editor settings](api/methods/js_eventcalendar_setconfig_method.md) | Learn how to update editor settings in a runtime                             |

## How to work with inner events

| Topic                                                                          | Description                                               |
| ------------------------------------------------------------------------------ | --------------------------------------------------------- |
| [Executing inner events](api/internal/js_eventcalendar_exec_method.md)         | Learn how to execute the inner event                      |
| [Intercepting inner events](api/internal/js_eventcalendar_intercept_method.md) | Learn how to intercept the inner event                    |
| [List of inner events](api/overview/events_overview.md)                        | See the list of Event Calendar inner events               |
| [Reordering inner events](api/internal/js_eventcalendar_setnext_method.md)     | Learn how to add the inner event into the Event Bus order |
| [Subscribing on inner events](api/internal/js_eventcalendar_on_method.md)      | Learn how to subscribe on the inner event                 |

## How to work with REST API

| Topic                                                                                     | Description                                        |
| ----------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [Loading server data for events](api/provider/rest_methods/js_eventcalendar_getevents_method.md)       | Learn how to load server data for events           |
| [Loading server data for calendars](api/provider/rest_methods/js_eventcalendar_getcalendars_method.md) | Learn how to load server data for calendars        |
| [Working with server](guides/working_with_server.md)                                      | Learn how to work with server via REST API         |

## How to work with state

| Topic                                                                                             | Description                                             |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| [Getting DataStore](api/internal/js_eventcalendar_getstores_method.md)                            | Learn how to get a DataStore object                     |
| [Getting StateStore properties](api/internal/js_eventcalendar_getstate_method.md)                 | Learn how to get an object of the StateStore properties |
| [Getting StateStore reactive properties](api/internal/js_eventcalendar_getreactivestate_method.md)| Learn how to get an object of the StateStore reactive properties |

## How to work with TypeScript

| Topic                                                       | Description                                        |
| ----------------------------------------------------------- | ---------------------------------------------------|
| [Working with TypeScript](guides/typescript_support.md)     | Learn how to work with TypeScript                  |

## Any questions left?

<button class="support_btn"><a href="https://forum.dhtmlx.com/">Ask the community</a> </button>

:::info
You can also leave your questions in the comments below!
:::