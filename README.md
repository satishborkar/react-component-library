# @react-slices/components

React helper components for small functionalities and some CSS interactive modified HTML components

-   `CopyToClipboardIcon`

```javascript
import { CopyToClipboardIcon } from '@react-slices/components';

<CopyToClipboardIcon text={'text to copy onclick'} containerClassName="" iconClassName="" style={{ color: 'red' }} inline={true || false} />;
```

Example with children

```javascript
<CopyToClipboardIcon text={'text to copy onclick'} containerClassName="" iconClassName="">
    Copy Text or your icon
</CopyToClipboardIcon>
```

-   `Button`

```javascript
import { Button } from '@react-slices/components';

<Button label={'Button Initial Label'} hoverText={'Text on hover'} containerClassName="" buttonClassName="" style={{ color: 'red' }} />;
```

Example with children

```javascript
<Button text={'text to copy onclick'} containerClassName="" buttonClassName="">
    any child
</Button>
```
