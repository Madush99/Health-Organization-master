import React from 'react';
import { ActivityIndicator,StyleSheet, View } from 'react-native';


const Loader = () => {
    const [animating, setAnimating] = React.useState(true);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setAnimating(!animating);
        }, 2000);
        return () => {
            clearInterval(interval);
        };
    }, [animating]);

    return (
        <>
            <View>
                <ActivityIndicator color="#1DA1F2" size={150} style={styles.item} />
            </View>


        </>
    )

}

const styles = StyleSheet.create({
   

    item: {
      padding: "300px",  
      paddingHorizontal: 10,
      
    }
  });
  

export default Loader;