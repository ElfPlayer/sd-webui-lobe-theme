import { Header as H } from '@lobehub/ui';
import { memo } from 'react';

import { useAppStore } from '@/store';
import { type DivProps } from '@/types';

import Actions from './Actions';
import Nav from './Nav';

const Header = memo<DivProps>(({ children }) => {
  const { themeMode } = useAppStore((st) => ({
    themeMode: st.themeMode,
    version: st.version,
  }));
  // const theme = useTheme();

  return (
    <H
      actions={<Actions themeMode={themeMode} />}
      actionsStyle={{ flex: 0 }}
      nav={
        <>
          <Nav />
          {children}
        </>
      }
    />
  );
});

export default Header;
