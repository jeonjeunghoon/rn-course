import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";

import { GlobalStyles } from "../styles/global";
import IconButton from "../components/UI/iconButton";
import Button from "../components/UI/Button";
import { useExpenses } from "../hooks/useExpenses";

export default function ManageExpense({ route, navigation }) {
  const { deleteExpense, updateExpense, addExpense } = useExpenses();
  const editedExpenseId = route.params?.expenseId;
  const isEditing = Boolean(editedExpenseId);

  const deleteExpenseHandler = () => {
    deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      updateExpense(editedExpenseId, {
        description: "test!!!!!!!",
        amount: 29900,
        date: new Date(),
      });
    } else {
      addExpense({
        description: "test",
        amount: 19900,
        date: new Date(),
      });
    }

    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "지출 수정하기" : "지출 추가하기",
    });
  }, [navigation, isEditing]);

  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <Button onPress={confirmHandler} style={styles.button}>
          {isEditing ? "수정" : "추가"}
        </Button>
        <Button mode='flat' onPress={cancelHandler} style={styles.button}>
          취소
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            size={36}
            color={GlobalStyles.colors.error500}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    minWidth: 80,
    marginHorizontal: 20,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
