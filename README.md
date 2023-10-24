# nimble-vue-components


## Nimble Vue
Nimble Vue is vue materials library. 

The purpose of Nimble Vue is to provide basic components, highly manageable, without tons of complex implementation
and styling. Complexity that is necessary only in rare cases. 

Main goal is to be nimble, be used in small projects on the fly, as alternative to the big and stuffed libraries.

The inspiration came from a bad experience with one of the famous vue library, when I had to manually override 
styling classes in order to use the library in small startup project.

## Table of Contents

- [nimble-vue-components](#nimble-vue-components)
  - [Project setup](#project-setup)
  - [Components](#components)
    - [Button](#button)
    - [Rich Tech Editor](#rich-tech-editor)
    - [Expanding Tile](#expanding-tile)
    - [Loading bar](#loading-bar)
    - [Modal Panel](#modal-panel)
    - [Notice box](#notice-box)
  - [Examples](#examples)
  - [Icons](#icons)
  - [Custom css classes](#custom-css-classes)

### Project setup
Install

```npm install nimble-vue-components```<br>

Import library in config file - app/main.js

```import NimbleVueComponents from 'nimble-vue-components';```<br>

Import library styles and icons for vue project

```import 'nimble-vue-components/dist/styles.css';```

```import 'nimble-vue-components/dist/nimble-vue-components.css';```

```import 'boxicons/css/boxicons.min.css';```<br>

Use it with vue instance

```app.use(NimbleVueComponents);```<br>

Note: You can import styles directly to main css if your project css file is project wide and working with other tools.

```@import "~nimble-vue-components/dist/styles.css";```

```@import "~nimble-vue-components/dist/nimble-vue-components.css";```<br>


## Components
### Button
- Purpose:
    This is a versatile button component that can be customized for various purposes. It allows users to create buttons with different styles, sizes, icons, and behavior.
- Events - mouseenter, mouseleave
- Props:
    - type: A prop to specify the button type (e.g., primary, secondary, danger, success, etc.).
    - size: Allow users to set the button size (e.g., small, medium, large).
    - icon: Enable users to add an icon to the button.
    - disabled: A boolean prop to disable the button when true.
    - loading: Another boolean prop to display a loading spinner when true.
    - block: A boolean prop to make the button a block-level element, taking up the full width of its container.
    - outline: A boolean prop to switch between outlined and solid button styles.
    - rounded: Allow users to round the button's corners when true.
    - onClick: A function prop for handling click events.
    - customClass: A prop to add custom CSS classes to the button.
    - text: Allow users to set the button's text content.
    - href: If the button can act as a link, allow users to specify the URL.
    - target: If the button is a link, let users control the link target (e.g., _blank for opening in a new tab).
    - tooltip: Enable users to add a tooltip or hint text to the button.
    - color: Allow users to set a custom background color for the button.
    - hoverColor: Let users specify a custom background color on hover.
    - textColor: Enable users to set a custom text color.
    - hoverTextColor: Let users specify a custom text color on hover.
    - ariaLabel: Include accessibility support by allowing users to set ARIA labels for screen readers.

- Functions:
    - click: A method to programmatically trigger a button click.
    - focus: A method to set focus on the button.
    - blur: A method to remove focus from the button.
- Usage:
    The nv-btn component can be used to create buttons with the following features:
- Example Usage: 
    ```
    <nv-btn
        type="primary"
        size="medium"
        icon="x-circle"
        text="Click Me"
        @click="handleButtonClick"
    />
    ```


### Rich Tech Editor
- Purpose:
    This component provides an editor for rich text content using Quill.js. It includes a toolbar for formatting options.
- Events - hide, focusin
- Props:
    - placeholder: A string prop for specifying the placeholder text in the editor.
    - hideOptions: A boolean prop to control the visibility of the editor options (toolbar).
    - height: A string prop to set the height of the editor.
    - identifier: A string prop used to uniquely identify the editor instance.
    - content: A string prop to set the initial content of the editor.
    - submitted: A boolean prop that, when true, triggers actions related to submission.
- Emits:
    - update:content: An event emitted to update the 'content' prop when the editor content changes.
- Usage:
    This component allows users to integrate a rich text editor into their Vue.js application. It can be customized by passing props for various options and providing event handling for content updates.

- Example Usage:
    ```
    <nv-editor
    placeholder="Enter text here"
    hideOptions="false"
    height="200px"
    identifier="unique-identifier"
    content="Initial content"
    :submitted="isSubmitted"
    @update:content="handleContentUpdate"
    />
    ```


### Expanding Tile
- Purpose:
    The nv-expand-tile component is a customizable container that displays content under a single bar. It consists of three sections: header, content, and a collapsible bar. These sections can be customized using slots or props.

- Props:
    - title: A string prop for the title displayed in the header.
    - noTileTrigger: A boolean prop to control whether the tile is collapsible (true to disable).
    - content: A string prop for the content to be displayed when the tile is expanded.
    - footer: A boolean prop to enable or disable the footer section.

    - headerClass: A string prop for custom CSS classes applied to the header.
    - headerStyle: A string prop for custom CSS styles applied to the header.
    - contentClass: A string prop for custom CSS classes applied to the content.
    - contentStyle: A string prop for custom CSS styles applied to the content.
    - footerStyle: A string prop for custom CSS styles applied to the footer.
    - collapseIcon: A string prop for the icon displayed when the tile is collapsed.
    - expandIcon: A string prop for the icon displayed when the tile is expanded.
    - iconSize: A string prop to specify the size of the expand/collapse icon.
    - iconColor: A string prop to set the color of the expand/collapse icon.
    - noIcon: A boolean prop to hide the expand/collapse icon.

- Events:
    - tile-close: An event emitted when the tile is closed (collapsed).
    - tile-open: An event emitted when the tile is opened (expanded).

- Usage:
    The nv-expand-tile component allows users to create collapsible content sections with a header, content, and an optional footer. Customize the appearance and behavior of the tile by passing the desired props.

- Example Usage:
    ```
    <nv-expand-tile title="Section 1">
        <p>This is the content of Section 1.</p>
        <template #footer>
            <p>Footer content for Section 1.</p>
        </template>
    </nv-expand-tile>
    ```
    ```
    <nv-expand-tile title="Section 2" :noTileTrigger="true">
        <p>This is the content of Section 2.</p>
    </nv-expand-tile>
    ```
    
### Loading bar
- Purpose:
    The nv-loading-bar component is used to display a loading bar, which can be either indeterminate (animated) or determinate (showing progress). It provides flexibility in customizing the appearance of the loading bar.

- Props:
    - mode: A string prop to specify the loading mode, which can be 'indeterminate' (animated) or 'determinate' (progress bar).
    - value: A numeric prop representing the current value (only applicable in determinate mode).
    - denominator: A numeric prop representing the total value (used to calculate progress percentage in determinate mode).
    - height: A string prop for setting the height of the loading bar.
    - color: A string prop for customizing the color of the loading bar.
    - background: A string prop for setting the background color of the loading bar.

- Usage:
    The nv-loading-bar component is a versatile loading bar that can be used in various scenarios to indicate progress or loading. Customize its appearance and behavior by setting the appropriate props.

- Example Usage:
    ```
    <nv-loading-bar mode="determinate" :value="50" :denominator="100" height="0.3rem" color="#0077cc" background="#add8e6" />
    ```


### Modal Panel
- Purpose:
    The nv-modal-panel component is a flexible modal dialog that can be used to display content on top of other content. It provides a modal container with customizable header, content, and footer sections. The modal can be shown or hidden based on the 'isOpen' prop.

- Props:
    - isOpen: A boolean prop to control the visibility of the modal.
    - noEscape: A boolean prop to disable modal closure when pressing the 'Escape' key.
    - acceptButtons: A boolean prop to display accept and cancel buttons in the footer.
    - closingKey: A string prop to specify the key (e.g., 'Escape') that closes the modal.
    - minWidth: A numeric prop to set the minimum width of the modal container.
    - title: A string prop for the title displayed in the modal header.
    - content: A string prop for the content displayed in the modal.
    - footer: A string prop for the content displayed in the modal footer.
    - headerClass: A string prop for custom CSS classes applied to the modal header.
    - contentClass: A string prop for custom CSS classes applied to the modal content.
    - footerClass: A string prop for custom CSS classes applied to the modal footer.
    - headerStyle: A string prop for custom CSS styles applied to the modal header.
    - contentStyle: A string prop for custom CSS styles applied to the modal content.
    - footerStyle: A string prop for custom CSS styles applied to the modal footer.

- Usage:
    The nv-modal-panel component can be used to create customizable modal dialogs. You can show or hide the modal by setting the 'isOpen' prop. Customize the modal appearance and content by passing the desired props and using slots for the header, content, and footer sections.
- Example Usage:
    ```
    <nv-modal-panel :is-open="showModal" title="Modal Title">
        <p>{{ modalContent }}</p>
    </nv-modal-panel>
    ```
    ```
    <nv-modal-panel :is-open="showModal" title="Confirmation" :accept-buttons="true">
        <p>{{ confirmationMessage }}</p>
        <template #footer>
            <NvBtn @click="handleAccept">Accept</NvBtn>
            <NvBtn @click="closeModal">Cancel</NvBtn>
        </template>
    </nv-modal-panel>
    ```
    

### Notice box
- Purpose:
    The nv-notice-message component is used to display temporary notification messages to users. It can show messages of different levels (success, info, warning, error) with customizable appearance and an optional close button. The message is automatically dismissed after a specified time.

- Props:
    - bubble: A boolean prop to style the message as a bubble.
    - value: A required prop representing the message content.
    - closable: A boolean prop to enable or disable the close button.
    - life: A numeric prop defining the time (in milliseconds) before the message automatically closes.
    - positionCorner: A string prop to specify the position of the message corner (e.g., 'top-left', 'top-right', 'bottom-left', 'bottom-right').
    - level: A string prop to set the message level (success, info, warning, error).
    - icon: A string prop to specify a custom icon for the message.
- Usage:
    The nv-notice-message component can be used to display temporary messages to users for various purposes, such as notifications, alerts, or feedback. Customize the appearance and behavior of the message by setting the appropriate props.
- Example Usage:
    ```
    <nv-notice-message value="Operation succeeded!" level="success" :icon="customIcon" />

    ```
    ```
    <nv-notice-message value="Important information!" level="info" :closable="true" bubble />

    ```


### Examples
Run the library as normal vue project and you can find the components default usage

```npm run serve```


### Icons 
Box Icons : Premium web friendly icons for free - https://boxicons.com/

### Custom css classes
Box Shadows

- nav-shadow
- weak-shadow
- deep-shadow

Sizing

- nv-w-3/13 = 23%
- nv-h-9/10 = 90%
- nv-h-15/16 = 96%
- nv-max-h-152 : 40rem