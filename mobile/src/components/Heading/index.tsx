import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps {
  title: string;
  subtitle: string;
  span: string;
}
 
export function Heading({title, subtitle, span, ...rest}:Props) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>
        {title}  
          {' '}    
            <Text style={styles.span}>
              {span}
            </Text>
      </Text>

      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}