import { Box, Typography, Stack, TextField } from "@mui/material";
import { CustomButton } from "../../../../common/src/Button";
import { ListRow } from "../../../../common/src/ListRow";

export default () => {
       const options = { printWidth: 140, singleQuote: true, useTabs: true };

       function formatCode(source: string, parser: string, tabWidth: number) {
              return source;
       }

       const double = (x) => x * 2;

       const handleSave = () => {
              alert("Сохранено!");
       };

       const handleEdit = (name: string) => {
              console.log("Редактирование:", name);
       };

       const handleDelete = (name: string) => {
              console.log("Удаление:", name);
       };

       return (
              <Box sx={{ p: 3 }}>
                     <Stack spacing={3}>
                            <Box>
                                   <Typography variant="h3" gutterBottom>
                                          Modern Prettier (v3)
                                   </Typography>
                                   <Typography variant="body1" color="text.secondary" gutterBottom>
                                          Этот код содержит нарушения правил форматирования Prettier v3
                                   </Typography>
                            </Box>

                            <Stack direction="row" spacing={2}>
                                   <CustomButton variant="contained" color="primary" onClick={handleSave}>
                                          Сохранить изменения
                                   </CustomButton>
                                   <CustomButton variant="outlined" color="secondary">
                                          Сбросить
                                   </CustomButton>
                                   <CustomButton variant="text" loading={false}>
                                          Форматировать
                                   </CustomButton>
                            </Stack>

                            <Box>
                                   <TextField fullWidth label="Поиск" placeholder="Введите название опции..." sx={{ mb: 2 }} />
                            </Box>

                            <Box>
                                   <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
                                          Опции Prettier v3
                                   </Typography>

                                   <ListRow
                                          title="singleQuote"
                                          description="Использовать одинарные кавычки вместо двойных"
                                          onEdit={() => handleEdit("singleQuote")}
                                          onDelete={() => handleDelete("singleQuote")}
                                   />

                                   <ListRow
                                          title="trailingComma"
                                          description='В v3 значение по умолчанию изменено с "es5" на "all" — запятые везде, включая параметры функций'
                                          onEdit={() => handleEdit("trailingComma")}
                                          onDelete={() => handleDelete("trailingComma")}
                                   />

                                   <ListRow
                                          title="arrowParens"
                                          description='Скобки вокруг единственного аргумента стрелочной функции, значение по умолчанию: "always"'
                                          onEdit={() => handleEdit("arrowParens")}
                                          onDelete={() => handleDelete("arrowParens")}
                                   />

                                   <ListRow
                                          title="bracketSpacing"
                                          description="Пробелы внутри фигурных скобок объектов: { foo: bar }"
                                          onEdit={() => handleEdit("bracketSpacing")}
                                   />

                                   <ListRow
                                          title="printWidth"
                                          description="Максимальная длина строки, после которой Prettier переносит код"
                                          onEdit={() => handleEdit("printWidth")}
                                   />
                            </Box>
                     </Stack>
              </Box>
       );
};
