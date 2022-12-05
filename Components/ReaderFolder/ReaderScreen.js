import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
// import ReaderView from 'react-native-reader'
// import HTMLView from "react-native-htmlview";



export default function ReaderScreen() {
  const { width, height } = useWindowDimensions();
  const [location, setLocation] = useState(null)

  // const locationChanged = (epubcifi) => {
  //   // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
  //   setLocation(epubcifi)
  // }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam cumque non veritatis in, modi obcaecati eveniet perspiciatis illum fuga possimus unde ad officiis, debitis alias ab soluta exercitationem temporibus cum culpa. Asperiores officia numquam omnis iure nihil similique, molestias facere temporibus beatae fuga. Sed autem esse doloremque inventore. Repudiandae tenetur libero facilis minus deleniti officiis repellendus rerum, voluptatem rem hic expedita provident, sit itaque est totam, distinctio tempora. Aut perferendis, labore quis blanditiis eveniet expedita a rem minima cumque. Fugiat quia doloremque nostrum voluptatum delectus quis architecto molestias voluptate, voluptatibus hic numquam sunt, ratione dolorum recusandae molestiae culpa animi ullam asperiores! Saepe natus perferendis laudantium quam illo, minima harum, laboriosam nemo nesciunt cum exercitationem molestiae error veritatis inventore. Mollitia dolorem earum pariatur aut sed temporibus quod blanditiis, voluptates eum ratione esse obcaecati nemo! Unde eligendi ad consectetur provident, tempore voluptatem perspiciatis, culpa beatae blanditiis iure doloribus quo ducimus natus nostrum repellendus reprehenderit, sequi dolores earum. Asperiores quam omnis nam sapiente in quidem ipsam, neque ullam aliquid nemo ad enim dolore molestiae mollitia amet, harum nobis placeat corrupti, eum quo at. Doloribus, magni. Magni reiciendis earum nostrum, doloribus quod adipisci nobis dolorem officia beatae nam laborum, aspernatur commodi veritatis minus neque deleniti quasi sequi. Enim culpa illo ut similique quae. Neque ducimus recusandae laudantium nemo expedita necessitatibus, a tempora obcaecati distinctio nobis, quo, blanditiis perspiciatis modi explicabo est eum iure suscipit! Iste corporis facere unde asperiores laudantium nihil est sit eaque magnam omnis obcaecati quo exercitationem, dicta voluptatibus quibusdam, excepturi voluptatum consectetur fugit optio impedit quidem necessitatibus provident voluptate dolor. Cum laudantium repudiandae laboriosam accusamus eius expedita recusandae, quia nobis, eaque consequuntur omnis quibusdam rerum odio cumque corrupti blanditiis incidunt commodi aliquid officia nesciunt. Ullam, ab. Blanditiis deleniti vero, deserunt numquam tempore in doloremque assumenda suscipit earum inventore placeat repellendus iure aspernatur dolorem, at porro perferendis sapiente explicabo eius, consectetur architecto aut minus corrupti tenetur! Explicabo, omnis.
        </Text>

        {/* <ReaderView
          // location={location}
          // locationChanged={locationChanged}
          // url="https://react-reader.metabits.no/files/alice.epub"

        /> */}
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
  }
})