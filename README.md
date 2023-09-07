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
