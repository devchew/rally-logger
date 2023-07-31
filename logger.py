import os

dir_path = os.path.dirname(os.path.realpath(__file__))


def create_logger(sensor_name, file_extension="txt"):
    data_dir = os.path.join(dir_path, "data", sensor_name)
    os.makedirs(data_dir, exist_ok=True)

    existing_files = os.listdir(data_dir)
    log_file_index = 1

    if existing_files:
        existing_indexes = [int(file_name.split(".")[0]) for file_name in existing_files if file_name.split(".")[0].isdigit()]
        log_file_index = max(existing_indexes) + 1

    log_file_path = os.path.join(data_dir, f"{log_file_index}.{file_extension}")

    def log(data_str):
        with open(log_file_path, "a") as log_file:
            log_file.write(data_str)

    return log
