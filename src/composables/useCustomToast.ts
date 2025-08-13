import { useToast } from "primevue/usetoast";

export default function useCustomToast() {
  const toast = useToast();

  function showError(message: string): void {
    toast.add({
      severity: "error",
      summary: "Ошибка!",
      detail: message,
      life: 3000
    });
  }

  function showSuccess(message: string): void {
    toast.add({
      severity: "success",
      summary: "Отлично!",
      detail: message,
      life: 3000
    });
  }

  function showInfo(message: string): void {
    toast.add({
      severity: "info",
      summary: "Информация",
      detail: message,
      life: 5000
    });
  }

  return { showError, showSuccess, showInfo };
}